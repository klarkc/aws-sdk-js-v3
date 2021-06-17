import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeOperatingSystemsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOperatingSystemsCommandInput {
}
export interface DescribeOperatingSystemsCommandOutput extends DescribeOperatingSystemsResponse, __MetadataBearer {
}
/**
 * <p>Describes the operating systems that are supported by AWS OpsWorks Stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeOperatingSystemsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeOperatingSystemsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeOperatingSystemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOperatingSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeOperatingSystemsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOperatingSystemsCommand extends $Command<DescribeOperatingSystemsCommandInput, DescribeOperatingSystemsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeOperatingSystemsCommandInput;
    constructor(input: DescribeOperatingSystemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOperatingSystemsCommandInput, DescribeOperatingSystemsCommandOutput>;
    private serialize;
    private deserialize;
}
