import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateVariableRequest, UpdateVariableResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVariableCommandInput extends UpdateVariableRequest {
}
export interface UpdateVariableCommandOutput extends UpdateVariableResult, __MetadataBearer {
}
/**
 * <p>Updates a variable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVariableCommandInput} for command's `input` shape.
 * @see {@link UpdateVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVariableCommand extends $Command<UpdateVariableCommandInput, UpdateVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateVariableCommandInput;
    constructor(input: UpdateVariableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVariableCommandInput, UpdateVariableCommandOutput>;
    private serialize;
    private deserialize;
}
