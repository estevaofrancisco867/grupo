import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContatosSection() {
  const contacts = [
    {
      icon: <Phone className="text-2xl" />,
      title: "Telefone",
      description: "Entre em contato conosco",
      value: "(43) 3158-1444",
    },
    {
      icon: <Mail className="text-2xl" />,
      title: "Email",
      description: "Envie sua mensagem",
      value: "kerigma@igreja.com",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      description: "Fale diretamente conosco",
      value: "(11) 98765-4321",
     
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contatos</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <Card key={index} className="shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-4">{contact.description}</p>
                <a
                  href={contact.link}
                  className="text-primary hover:underline font-medium"
                >
                  {contact.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
