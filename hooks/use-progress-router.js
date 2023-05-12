import { useRouter } from "next/navigation";
import nProgress from "nprogress";

function usePRouter() {
  const router = useRouter();

  const { push } = router;

  router.push = (href) => {
    nProgress.start();
    push(href);
  };

  return router;
}

export default usePRouter;
