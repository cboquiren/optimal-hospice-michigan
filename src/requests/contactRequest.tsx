import toast from "react-hot-toast";

const email = "office@optimalhospicemi.com";

const contactRequest = (data: { name: string; email: string; message: string }) => {
  return fetch(`https://formsubmit.co/ajax/${email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      toast.error("Please Try Again");
    }
    return response.json();
  });
};

export const formRequest = {
  contactRequest,
};
