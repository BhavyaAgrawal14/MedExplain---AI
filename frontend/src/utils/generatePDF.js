import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateAnalysisPDF = (analysis) => {
  const doc = new jsPDF();

  // ===== Title =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(37, 99, 235);
  doc.text("MedExplain AI", 105, 20, { align: "center" });

  doc.setFontSize(14);
  doc.setTextColor(80);
  doc.text("AI-Powered Medical Report Analysis", 105, 30, {
    align: "center",
  });

  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    105,
    35,
    { align: "center" }
  );

  // Divider
  doc.setDrawColor(220);
  doc.line(20, 36, 190, 36);

  // ===== Health Overview =====

  const scoreColor =
    analysis.healthScore >= 80
      ? [22, 163, 74]
      : analysis.healthScore >= 60
      ? [245, 158, 11]
      : [220, 38, 38];

  const cardY = 42;

  // Health Score Card
  doc.setFillColor(...scoreColor);
  doc.roundedRect(20, cardY, 55, 42, 4, 4, "F");

  doc.setTextColor(255);
  doc.setFont("helvetica", "bold");

  doc.setFontSize(11);
  doc.text("Health Score", 47.5, cardY + 10, {
    align: "center",
  });

  doc.setFontSize(28);
  doc.text(`${analysis.healthScore}/100`, 47.5, cardY + 28, {
    align: "center",
  });

  // Details Card
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(82, cardY, 108, 42, 4, 4, "F");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(30);

  doc.text("Risk Level", 90, cardY + 12);
  doc.text(analysis.riskLevel, 145, cardY + 12);

  doc.text("Severity", 90, cardY + 24);
  doc.text(analysis.severity, 145, cardY + 24);

  doc.text("Condition", 90, cardY + 36);
  doc.text(analysis.patientCondition, 145, cardY + 36);

  let y = cardY + 55;

  // ===== Summary =====

  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text("Summary", 20, y);

  y += 8;

  const summary = doc.splitTextToSize(analysis.summary, 160);

  doc.setFillColor(239, 246, 255);
  doc.roundedRect(
    18,
    y - 5,
    174,
    summary.length * 6 + 12,
    3,
    3,
    "F"
  );

  doc.setFontSize(11);
  doc.setTextColor(60);
  doc.text(summary, 24, y + 2);

  y += summary.length * 6 + 18;

  // ===== Helper =====

  const checkPageBreak = (requiredSpace = 20) => {
    if (y + requiredSpace > 270) {
      doc.addPage();
      y = 20;
    }
  };

  const addSection = (title, items) => {
    checkPageBreak(40);

    doc.setFontSize(16);
    doc.setTextColor(37, 99, 235);
    doc.text(title, 20, y);

    y += 8;

    doc.setFontSize(11);
    doc.setTextColor(60);

    if (Array.isArray(items)) {
      items.forEach((item) => {
        doc.text(`• ${item}`, 24, y);
        y += 7;
      });
    } else if (typeof items === "object" && items !== null) {
      Object.entries(items).forEach(([key, value]) => {
        doc.text(`${key}: ${value}`, 24, y);
        y += 7;
      });
    } else {
      const lines = doc.splitTextToSize(String(items), 170);
      doc.text(lines, 20, y);
      y += lines.length * 6;
    }

    y += 8;
  };

    // ===== Abnormal Values =====

  checkPageBreak(80);

  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text("Abnormal Values", 20, y);

  y += 6;

  autoTable(doc, {
    startY: y,
    theme: "striped",

    head: [["Test", "Status", "Explanation"]],

    body: analysis.abnormalValues.map((item) => [
      item.test,
      item.status,
      item.explanation,
    ]),

    headStyles: {
      fillColor: [37, 99, 235],
      textColor: 255,
      fontStyle: "bold",
    },

    styles: {
      fontSize: 10,
      cellPadding: 3,
      valign: "middle",
    },

    alternateRowStyles: {
      fillColor: [248, 250, 252],
    },

    didParseCell: function (data) {
      if (data.section === "body" && data.column.index === 1) {
        const status = String(data.cell.raw);

        if (status === "High" || status === "Low") {
          data.cell.styles.textColor = [220, 38, 38];
          data.cell.styles.fontStyle = "bold";
        } else if (status === "Moderate") {
          data.cell.styles.textColor = [245, 158, 11];
          data.cell.styles.fontStyle = "bold";
        } else {
          data.cell.styles.textColor = [22, 163, 74];
          data.cell.styles.fontStyle = "bold";
        }
      }
    },
  });

  y = doc.lastAutoTable.finalY + 10;

  // ===== Recommendations =====

  addSection("Recommendations", analysis.recommendations);

  // ===== Positive Findings =====

  addSection("Positive Findings", analysis.positiveFindings);

  // ===== Diet Suggestions =====

  addSection("Diet Suggestions", analysis.dietSuggestions);

  // ===== Exercise Suggestions =====

  addSection(
    "Exercise Suggestions",
    analysis.exerciseSuggestions
  );

  // ===== Follow Up =====

  checkPageBreak(50);

  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text("Follow Up", 20, y);

  y += 10;

  doc.setFontSize(12);
  doc.setTextColor(60);

  doc.setFont(undefined, "bold");
  doc.text("Urgency:", 20, y);

  doc.setFont(undefined, "normal");
  doc.text(analysis.followUp.urgency, 55, y);

  y += 8;

  doc.setFont(undefined, "bold");
  doc.text("Timeline:", 20, y);

  doc.setFont(undefined, "normal");
  doc.text(analysis.followUp.timeline, 55, y);

  y += 8;

  doc.setFont(undefined, "bold");
  doc.text("Reason:", 20, y);

  doc.setFont(undefined, "normal");

  const reason = doc.splitTextToSize(
    analysis.followUp.reason,
    135
  );

  doc.text(reason, 55, y);

  y += reason.length * 6 + 10;

  // ===== Medical Disclaimer =====

  checkPageBreak(40);

  doc.setFontSize(15);
  doc.setTextColor(220, 38, 38);
  doc.text("Medical Disclaimer", 20, y);

  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(80);

  const disclaimer = doc.splitTextToSize(
    analysis.disclaimer,
    170
  );

  doc.text(disclaimer, 20, y);

  // ===== Footer =====

  const pageCount = doc.getNumberOfPages();

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);

    doc.setFontSize(9);
    doc.setTextColor(130);

    doc.text(
      `Generated on ${new Date().toLocaleString()}`,
      20,
      285
    );

    doc.text(
      `Page ${i} of ${pageCount}`,
      105,
      285,
      {
        align: "center",
      }
    );

    doc.text(
      "Generated by MedExplain AI",
      190,
      285,
      {
        align: "right",
      }
    );
  }

  const date = new Date().toISOString().split("T")[0];

  doc.save(`MedExplainAI_Report_${date}.pdf`);
};

