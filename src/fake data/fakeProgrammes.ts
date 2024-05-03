import { RowData } from "@/interfaces";
import logo from "../images/J-WAFS_DARK_SHOT_PNG 1 (1).png";

export const rowDataExample: RowData = {
    repository: {
      top: {
        name: "InnovateX",
        description: "Leading the way in sustainable technology.",
        mission: "To innovate and promote sustainable practices in technology.",
        year: "2012",
        partners: ["TechGlobal", "EcoSolutions"]
      },
      content: {
        logo: {
          url: logo
        },
        research: {
          data: {
            findings: ["Finding 1", "Finding 2"]
          }
        },
        established: {
          data: {
            year: ["2012"]
          }
        },
        headquarters: {
          data: {
            location: ["New York, NY"]
          }
        },
        leadership: {
          data: {
            ceo: ["John Doe"],
            cto: ["Jane Smith"]
          }
        },
        "key initiatives": {
          data: {
            initiatives: ["GreenTech Program", "AI for Earth"]
          }
        },
        "key partners": {
          data: {
            partners: ["GreenTech Innovators", "AI Ventures"]
          }
        },
        fullDescription: "InnovateX is at the forefront of integrating sustainable practices with cutting-edge technology, driving significant change across industries.",
        socialMediaLinks: {
          instagram: {
            url: "https://instagram.com/innovatex",
            name: "innovatex"
          },
          youtube: {
            url: "https://youtube.com/innovatex",
            name: "InnovateX Official"
          },
          linkedin: {
            url: "https://linkedin.com/company/innovatex",
            name: "InnovateX"
          },
          facebook: {
            url: "https://facebook.com/innovatex",
            name: "InnovateX"
          },
          twitter: {
            url: "https://twitter.com/innovatex",
            name: "InnovateX"
          }
        },
        stats: [
          {
            title: "21M",
            content: "funds"
          },
          {
            title: "500K",
            content: "Results"
          }
        ],
        listContent: [
          {
            title: "Project SolarGlow",
            source: "Internal",
            date: "2021-06-15"
          },
          {
            title: "Water Purification Project",
            source: "Internal",
            date: "2022-01-20"
          }
        ],
        features: [
          {
            image: {
              imageUrl: logo
            },
            title: "Advanced Robotics"
          }
        ]
      }
    }
  };
  