# UsersApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**userPost**](#userpost) | **POST** /user | Create a new user|

# **userPost**
> EntUser userPost(user)

Create a new user with name and email

### Example

```typescript
import {
    UsersApi,
    Configuration,
    RequestsUserCreationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let user: RequestsUserCreationRequest; //User creation request

const { status, data } = await apiInstance.userPost(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **RequestsUserCreationRequest**| User creation request | |


### Return type

**EntUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User created successfully |  -  |
|**400** | Bad request - user couldn\&#39;t be created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

