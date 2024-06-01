import useStore  from "../store"

export const useError = () => {
    const resetEditedTask = useStore((state) => )
  const switchErrorHandling = (msg: string) => {
    switch (msg) {
      case "invalid csrf token":
        alert("csrf token is invalid, please try again");
        break;
      default:
        alert(msg);
    }
  };
};
