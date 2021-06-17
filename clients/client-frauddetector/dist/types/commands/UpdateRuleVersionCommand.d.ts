import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateRuleVersionRequest, UpdateRuleVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRuleVersionCommandInput extends UpdateRuleVersionRequest {
}
export interface UpdateRuleVersionCommandOutput extends UpdateRuleVersionResult, __MetadataBearer {
}
/**
 * <p>Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateRuleVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateRuleVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateRuleVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRuleVersionCommand extends $Command<UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateRuleVersionCommandInput;
    constructor(input: UpdateRuleVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput>;
    private serialize;
    private deserialize;
}
