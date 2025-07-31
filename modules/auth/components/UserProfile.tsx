import React from 'react';
import UserIcon from '../../../components/ui/icons/UserIcon';
import { getCurrentAccount } from '../auth-queries';
import LoginButton from './LoginButton';

export default async function UserProfile() {
  const account = await getCurrentAccount();

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-end gap-1">
        <span className="text-sm">{account?.name}</span>
        <LoginButton />
      </div>
      <UserIcon className="text-primary hover:text-primary-dark cursor-pointer transition-colors" />
    </div>
  );
}

export function UserProfileSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}
