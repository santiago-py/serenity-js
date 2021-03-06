import { ensure, isDefined, JSONObject } from 'tiny-types';

import { CorrelationId, Tag, Timestamp } from '../model';
import { DomainEvent } from './DomainEvent';

export class SceneTagged extends DomainEvent {
    static fromJSON(o: JSONObject) {
        return new SceneTagged(
            CorrelationId.fromJSON(o.sceneId as string),
            Tag.fromJSON(o.tag as JSONObject),
            Timestamp.fromJSON(o.timestamp as string),
        );
    }
    constructor(
        public readonly sceneId: CorrelationId,
        public readonly tag: Tag,
        timestamp?: Timestamp,
    ) {
        super(timestamp);
        ensure('sceneId', sceneId, isDefined());
    }
}
