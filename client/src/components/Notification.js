// src/components/Notification.js
import { notification } from 'antd';

// Function to show a success notification
export const openNotificationSuccess = (message = 'Success', description = 'Operation completed successfully') => {
  notification.success({
    message: message,
    description: description,
    duration: 2, // Duration in seconds
  });
};

// Function to show an error notification
export const openNotificationError = (message = 'Error', description = 'Something went wrong') => {
  notification.error({
    message: message,
    description: description,
    duration: 2, // Duration in seconds
  });
};