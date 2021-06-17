import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DescribeResourceRequest, DescribeResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeResourceCommandInput extends DescribeResourceRequest {
}
export interface DescribeResourceCommandOutput extends DescribeResourceResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the current data access role for the given resource registered in AWS Lake Formation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DescribeResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DescribeResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new DescribeResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeResourceCommand extends $Command<DescribeResourceCommandInput, DescribeResourceCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: DescribeResourceCommandInput;
    constructor(input: DescribeResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourceCommandInput, DescribeResourceCommandOutput>;
    private serialize;
    private deserialize;
}
