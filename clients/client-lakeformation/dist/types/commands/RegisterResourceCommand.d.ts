import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RegisterResourceRequest, RegisterResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterResourceCommandInput extends RegisterResourceRequest {
}
export interface RegisterResourceCommandOutput extends RegisterResourceResponse, __MetadataBearer {
}
/**
 * <p>Registers the resource as managed by the Data Catalog.</p>
 *
 * 	        <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
 *
 *          <p>The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.</p>
 *
 *          <p>
 *             <code>ResourceArn = arn:aws:s3:::my-bucket
 * UseServiceLinkedRole = true</code>
 *          </p>
 *
 * 	        <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p>
 *
 *          <p>
 *             <code>arn:aws:iam::12345:role/my-data-access-role</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RegisterResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RegisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new RegisterResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterResourceCommandInput} for command's `input` shape.
 * @see {@link RegisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterResourceCommand extends $Command<RegisterResourceCommandInput, RegisterResourceCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: RegisterResourceCommandInput;
    constructor(input: RegisterResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterResourceCommandInput, RegisterResourceCommandOutput>;
    private serialize;
    private deserialize;
}
