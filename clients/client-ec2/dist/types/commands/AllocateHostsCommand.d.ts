import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AllocateHostsRequest, AllocateHostsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AllocateHostsCommandInput extends AllocateHostsRequest {
}
export interface AllocateHostsCommandOutput extends AllocateHostsResult, __MetadataBearer {
}
/**
 * <p>Allocates a Dedicated Host to your account. At a minimum, specify the supported instance
 *         	type or instance family, the Availability Zone in which to allocate the host, and the number of
 *         	hosts to allocate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AllocateHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AllocateHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateHostsCommandInput} for command's `input` shape.
 * @see {@link AllocateHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AllocateHostsCommand extends $Command<AllocateHostsCommandInput, AllocateHostsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AllocateHostsCommandInput;
    constructor(input: AllocateHostsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateHostsCommandInput, AllocateHostsCommandOutput>;
    private serialize;
    private deserialize;
}
