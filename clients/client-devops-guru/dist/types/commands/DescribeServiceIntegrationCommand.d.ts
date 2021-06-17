import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeServiceIntegrationRequest, DescribeServiceIntegrationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeServiceIntegrationCommandInput extends DescribeServiceIntegrationRequest {
}
export interface DescribeServiceIntegrationCommandOutput extends DescribeServiceIntegrationResponse, __MetadataBearer {
}
/**
 * <p>
 * 			Returns the integration status of services that are integrated with DevOps Guru.
 * 			The one service that can be integrated with DevOps Guru
 *       	is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeServiceIntegrationCommand extends $Command<DescribeServiceIntegrationCommandInput, DescribeServiceIntegrationCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: DescribeServiceIntegrationCommandInput;
    constructor(input: DescribeServiceIntegrationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServiceIntegrationCommandInput, DescribeServiceIntegrationCommandOutput>;
    private serialize;
    private deserialize;
}
