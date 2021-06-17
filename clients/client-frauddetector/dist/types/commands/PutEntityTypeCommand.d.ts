import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutEntityTypeRequest, PutEntityTypeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEntityTypeCommandInput extends PutEntityTypeRequest {
}
export interface PutEntityTypeCommandOutput extends PutEntityTypeResult, __MetadataBearer {
}
/**
 * <p>Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutEntityTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutEntityTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutEntityTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEntityTypeCommandInput} for command's `input` shape.
 * @see {@link PutEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEntityTypeCommand extends $Command<PutEntityTypeCommandInput, PutEntityTypeCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutEntityTypeCommandInput;
    constructor(input: PutEntityTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEntityTypeCommandInput, PutEntityTypeCommandOutput>;
    private serialize;
    private deserialize;
}
