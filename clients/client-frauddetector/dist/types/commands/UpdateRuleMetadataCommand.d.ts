import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateRuleMetadataRequest, UpdateRuleMetadataResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRuleMetadataCommandInput extends UpdateRuleMetadataRequest {
}
export interface UpdateRuleMetadataCommandOutput extends UpdateRuleMetadataResult, __MetadataBearer {
}
/**
 * <p>Updates a rule's metadata. The description attribute can be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateRuleMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateRuleMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateRuleMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleMetadataCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRuleMetadataCommand extends $Command<UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateRuleMetadataCommandInput;
    constructor(input: UpdateRuleMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
