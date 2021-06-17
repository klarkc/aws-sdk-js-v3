import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetDeployablePatchSnapshotForInstanceRequest, GetDeployablePatchSnapshotForInstanceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeployablePatchSnapshotForInstanceCommandInput extends GetDeployablePatchSnapshotForInstanceRequest {
}
export interface GetDeployablePatchSnapshotForInstanceCommandOutput extends GetDeployablePatchSnapshotForInstanceResult, __MetadataBearer {
}
/**
 * <p>Retrieves the current snapshot for the patch baseline the instance uses. This API is
 *    primarily used by the AWS-RunPatchBaseline Systems Manager document. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDeployablePatchSnapshotForInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeployablePatchSnapshotForInstanceCommand extends $Command<GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetDeployablePatchSnapshotForInstanceCommandInput;
    constructor(input: GetDeployablePatchSnapshotForInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
