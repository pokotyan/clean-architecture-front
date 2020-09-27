import React, { Component, ErrorInfo, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1 style={{ whiteSpace: "pre-wrap" }}>{error?.message}</h1>;
    }

    return children;
  }
}
