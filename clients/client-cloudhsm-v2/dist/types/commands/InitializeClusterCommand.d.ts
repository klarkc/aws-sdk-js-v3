import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { InitializeClusterRequest, InitializeClusterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InitializeClusterCommandInput extends InitializeClusterRequest {
}
export interface InitializeClusterCommandOutput extends InitializeClusterResponse, __MetadataBearer {
}
/**
 * <p>Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your
 *       issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
 *       cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
 *       To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, InitializeClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, InitializeClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new InitializeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitializeClusterCommandInput} for command's `input` shape.
 * @see {@link InitializeClusterCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InitializeClusterCommand extends $Command<InitializeClusterCommandInput, InitializeClusterCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: InitializeClusterCommandInput;
    constructor(input: InitializeClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitializeClusterCommandInput, InitializeClusterCommandOutput>;
    private serialize;
    private deserialize;
}
