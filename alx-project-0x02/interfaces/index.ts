// CardProps interface
export interface CardProps {
  title: string;
  content: string;
}

// ButtonProps interface
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}

// PostProps interface
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

// UserProps interface
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
