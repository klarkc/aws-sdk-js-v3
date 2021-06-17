import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeAlgorithmRequest, DescribeAlgorithmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAlgorithmCommandInput extends DescribeAlgorithmRequest {
}
export interface DescribeAlgorithmCommandOutput extends DescribeAlgorithmResponse, __MetadataBearer {
}
/**
 * <p>Describes the given algorithm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeAlgorithmCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeAlgorithmCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeAlgorithmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAlgorithmCommand extends $Command<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeAlgorithmCommandInput;
    constructor(input: DescribeAlgorithmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput>;
    private serialize;
    private deserialize;
}
