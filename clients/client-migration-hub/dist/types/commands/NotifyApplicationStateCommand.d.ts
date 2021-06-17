import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { NotifyApplicationStateRequest, NotifyApplicationStateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface NotifyApplicationStateCommandInput extends NotifyApplicationStateRequest {
}
export interface NotifyApplicationStateCommandOutput extends NotifyApplicationStateResult, __MetadataBearer {
}
/**
 * <p>Sets the migration state of an application. For a given application identified by the
 *          value passed to <code>ApplicationId</code>, its status is set or updated by passing one of
 *          three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS |
 *          COMPLETED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyApplicationStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyApplicationStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new NotifyApplicationStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyApplicationStateCommandInput} for command's `input` shape.
 * @see {@link NotifyApplicationStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class NotifyApplicationStateCommand extends $Command<NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: NotifyApplicationStateCommandInput;
    constructor(input: NotifyApplicationStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput>;
    private serialize;
    private deserialize;
}
