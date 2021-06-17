import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseMasterUserPasswordRequest, GetRelationalDatabaseMasterUserPasswordResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRelationalDatabaseMasterUserPasswordCommandInput extends GetRelationalDatabaseMasterUserPasswordRequest {
}
export interface GetRelationalDatabaseMasterUserPasswordCommandOutput extends GetRelationalDatabaseMasterUserPasswordResult, __MetadataBearer {
}
/**
 * <p>Returns the current, previous, or pending versions of the master user password for a
 *       Lightsail database.</p>
 *          <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based
 *       access control via resource tags applied to the resource identified by
 *       relationalDatabaseName.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseMasterUserPasswordCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseMasterUserPasswordCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseMasterUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseMasterUserPasswordCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseMasterUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRelationalDatabaseMasterUserPasswordCommand extends $Command<GetRelationalDatabaseMasterUserPasswordCommandInput, GetRelationalDatabaseMasterUserPasswordCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseMasterUserPasswordCommandInput;
    constructor(input: GetRelationalDatabaseMasterUserPasswordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseMasterUserPasswordCommandInput, GetRelationalDatabaseMasterUserPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
