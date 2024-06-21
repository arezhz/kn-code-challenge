import { Card, CardFooter, CardHeader, Divider, Skeleton } from "@nextui-org/react";

export default function PostSkeletonLoading() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card shadow="sm">
        <CardHeader className="flex flex-col items-start gap-2">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardFooter className="flex gap-1 justify-end">
          <Skeleton className="w-10 rounded-md">
            <div className="h-10 w-10 rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardFooter>
      </Card>
      <Card shadow="sm">
        <CardHeader className="flex flex-col items-start gap-2">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardFooter className="flex gap-1 justify-end">
          <Skeleton className="w-10 rounded-md">
            <div className="h-10 w-10 rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardFooter>
      </Card>
      <Card shadow="sm">
        <CardHeader className="flex flex-col items-start gap-2">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardFooter className="flex gap-1 justify-end">
          <Skeleton className="w-10 rounded-md">
            <div className="h-10 w-10 rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardFooter>
      </Card>
      <Card shadow="sm">
        <CardHeader className="flex flex-col items-start gap-2">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardFooter className="flex gap-1 justify-end">
          <Skeleton className="w-10 rounded-md">
            <div className="h-10 w-10 rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardFooter>
      </Card>
    </section>
  );
}
