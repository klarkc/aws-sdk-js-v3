import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CancelStepsInput, CancelStepsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelStepsCommandInput extends CancelStepsInput {
}
export interface CancelStepsCommandOutput extends CancelStepsOutput, __MetadataBearer {
}
/**
 * <p>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR
 *          versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in
 *          each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee
 *          that a step will be canceled, even if the request is successfully submitted. You can only
 *          cancel steps that are in a <code>PENDING</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CancelStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CancelStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CancelStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelStepsCommandInput} for command's `input` shape.
 * @see {@link CancelStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelStepsCommand extends $Command<CancelStepsCommandInput, CancelStepsCommandOutput, EMRClientResolvedConfig> {
    readonly input: CancelStepsCommandInput;
    constructor(input: CancelStepsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelStepsCommandInput, CancelStepsCommandOutput>;
    private serialize;
    private deserialize;
}
