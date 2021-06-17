import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateVariableRequest, CreateVariableResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVariableCommandInput extends CreateVariableRequest {
}
export interface CreateVariableCommandOutput extends CreateVariableResult, __MetadataBearer {
}
/**
 * <p>Creates a variable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVariableCommandInput} for command's `input` shape.
 * @see {@link CreateVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVariableCommand extends $Command<CreateVariableCommandInput, CreateVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CreateVariableCommandInput;
    constructor(input: CreateVariableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVariableCommandInput, CreateVariableCommandOutput>;
    private serialize;
    private deserialize;
}
