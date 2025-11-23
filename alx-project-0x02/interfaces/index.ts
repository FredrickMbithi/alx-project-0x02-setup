// CardProps interface
export interface CardProps {
  title: string;
  content: string;
}

// Button size & shape discriminated union types
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

// ButtonProps interface
export interface ButtonProps {
  size?: ButtonSize;
  shape?: ButtonShape;
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
