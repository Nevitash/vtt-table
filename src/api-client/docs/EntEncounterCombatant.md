# EntEncounterCombatant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combatant_id** | **string** | Reference to the combatant | [optional] [default to undefined]
**edges** | [**EntEncounterCombatantEdges**](EntEncounterCombatantEdges.md) | Edges holds the relations/edges for other nodes in the graph. The values are being populated by the EncounterCombatantQuery when eager-loading is set. | [optional] [default to undefined]
**encounter_id** | **string** | Reference to the encounter | [optional] [default to undefined]
**id** | **string** | ID of the ent. | [optional] [default to undefined]
**is_enemy** | **boolean** | Whether this combatant is an enemy | [optional] [default to undefined]
**is_friendly** | **boolean** | Whether this combatant is friendly | [optional] [default to undefined]
**is_party_member** | **boolean** | Whether this combatant is a party member | [optional] [default to undefined]

## Example

```typescript
import { EntEncounterCombatant } from './api';

const instance: EntEncounterCombatant = {
    combatant_id,
    edges,
    encounter_id,
    id,
    is_enemy,
    is_friendly,
    is_party_member,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
