import { Divider, Skeleton } from "@nextui-org/react";

export default function PostDetailsSkeletonLoading() {
  return (
    <section className="max-w-4xl m-auto">
      <div className="flex justify-between items-center">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-10 rounded-md">
          <div className="h-10 w-10 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <Divider className="my-4" />
      <div className="flex flex-col gap-3">
      <Skeleton className="w-1/4 rounded-lg">
        <div className="h-6 w-1/4 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-2/4 rounded-lg">
        <div className="h-6 w-2/4 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-3/4 rounded-lg">
        <div className="h-6 w-3/4 rounded-lg bg-default-200"></div>
      </Skeleton>
      </div>
    </section>
  );
}
