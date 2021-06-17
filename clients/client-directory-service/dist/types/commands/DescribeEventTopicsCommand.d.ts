import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeEventTopicsRequest, DescribeEventTopicsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventTopicsCommandInput extends DescribeEventTopicsRequest {
}
export interface DescribeEventTopicsCommandOutput extends DescribeEventTopicsResult, __MetadataBearer {
}
/**
 * <p>Obtains information about which SNS topics receive status messages from the specified directory.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeEventTopicsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeEventTopicsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeEventTopicsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventTopicsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTopicsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventTopicsCommand extends $Command<DescribeEventTopicsCommandInput, DescribeEventTopicsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeEventTopicsCommandInput;
    constructor(input: DescribeEventTopicsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventTopicsCommandInput, DescribeEventTopicsCommandOutput>;
    private serialize;
    private deserialize;
}
