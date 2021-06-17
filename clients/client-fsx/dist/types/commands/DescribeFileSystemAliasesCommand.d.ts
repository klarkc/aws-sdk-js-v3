import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeFileSystemAliasesRequest, DescribeFileSystemAliasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFileSystemAliasesCommandInput extends DescribeFileSystemAliasesRequest {
}
export interface DescribeFileSystemAliasesCommandOutput extends DescribeFileSystemAliasesResponse, __MetadataBearer {
}
/**
 * <p>Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of
 *             all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a>
 *         provided in the <a>DescribeFileSystems</a> operation response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFileSystemAliasesCommand extends $Command<DescribeFileSystemAliasesCommandInput, DescribeFileSystemAliasesCommandOutput, FSxClientResolvedConfig> {
    readonly input: DescribeFileSystemAliasesCommandInput;
    constructor(input: DescribeFileSystemAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFileSystemAliasesCommandInput, DescribeFileSystemAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
