import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { DescribeProjectRequest, DescribeProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProjectCommandInput extends DescribeProjectRequest {
}
export interface DescribeProjectCommandOutput extends DescribeProjectResult, __MetadataBearer {
}
/**
 * <p>
 *             Gets details about a project in AWS Mobile Hub.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DescribeProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DescribeProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProjectCommand extends $Command<DescribeProjectCommandInput, DescribeProjectCommandOutput, MobileClientResolvedConfig> {
    readonly input: DescribeProjectCommandInput;
    constructor(input: DescribeProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MobileClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProjectCommandInput, DescribeProjectCommandOutput>;
    private serialize;
    private deserialize;
}
