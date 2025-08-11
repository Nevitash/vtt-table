# EntUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edges** | [**EntUserEdges**](EntUserEdges.md) | Edges holds the relations/edges for other nodes in the graph. The values are being populated by the UserQuery when eager-loading is set. | [optional] [default to undefined]
**email** | **string** | Email holds the value of the \&quot;email\&quot; field. | [optional] [default to undefined]
**id** | **string** | ID of the ent. | [optional] [default to undefined]
**name** | **string** | Name holds the value of the \&quot;name\&quot; field. | [optional] [default to undefined]
**verified** | **boolean** | Verified holds the value of the \&quot;verified\&quot; field. | [optional] [default to undefined]

## Example

```typescript
import { EntUser } from './api';

const instance: EntUser = {
    edges,
    email,
    id,
    name,
    verified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
