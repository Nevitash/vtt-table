# EntEncounter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edges** | [**EntEncounterEdges**](EntEncounterEdges.md) | Edges holds the relations/edges for other nodes in the graph. The values are being populated by the EncounterQuery when eager-loading is set. | [optional] [default to undefined]
**id** | **string** | ID of the ent. | [optional] [default to undefined]
**name** | **string** | Name holds the value of the \&quot;name\&quot; field. | [optional] [default to undefined]
**user_id** | **string** | ID of the user who owns this encounter | [optional] [default to undefined]

## Example

```typescript
import { EntEncounter } from './api';

const instance: EntEncounter = {
    edges,
    id,
    name,
    user_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
