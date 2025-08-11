# EntCombatant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ac** | **number** | Armor Class | [optional] [default to undefined]
**cr** | **number** | Challenge Rating, e.g., 1.25 | [optional] [default to undefined]
**damage** | **number** | Damage as decimal, e.g., 45.6 | [optional] [default to undefined]
**dc** | **number** | Difficulty Class | [optional] [default to undefined]
**edges** | [**EntCombatantEdges**](EntCombatantEdges.md) | Edges holds the relations/edges for other nodes in the graph. The values are being populated by the CombatantQuery when eager-loading is set. | [optional] [default to undefined]
**hit_dice** | **string** | Hit dice as string, e.g., \&#39;2d8+2\&#39; | [optional] [default to undefined]
**hp** | **number** | Hit Points | [optional] [default to undefined]
**id** | **string** | ID of the ent. | [optional] [default to undefined]
**is_boss** | **boolean** | Whether this combatant is a boss | [optional] [default to undefined]
**is_legendary** | **boolean** | Whether this combatant is legendary | [optional] [default to undefined]
**name** | **string** | Name holds the value of the \&quot;name\&quot; field. | [optional] [default to undefined]
**speed_mod** | **number** | Speed modifier, can be negative | [optional] [default to undefined]

## Example

```typescript
import { EntCombatant } from './api';

const instance: EntCombatant = {
    ac,
    cr,
    damage,
    dc,
    edges,
    hit_dice,
    hp,
    id,
    is_boss,
    is_legendary,
    name,
    speed_mod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
