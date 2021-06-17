import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ChangeServerLifeCycleStateRequest, SourceServer } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ChangeServerLifeCycleStateCommandInput extends ChangeServerLifeCycleStateRequest {
}
export interface ChangeServerLifeCycleStateCommandOutput extends SourceServer, __MetadataBearer {
}
/**
 * <p>Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ChangeServerLifeCycleStateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ChangeServerLifeCycleStateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new ChangeServerLifeCycleStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeServerLifeCycleStateCommandInput} for command's `input` shape.
 * @see {@link ChangeServerLifeCycleStateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ChangeServerLifeCycleStateCommand extends $Command<ChangeServerLifeCycleStateCommandInput, ChangeServerLifeCycleStateCommandOutput, MgnClientResolvedConfig> {
    readonly input: ChangeServerLifeCycleStateCommandInput;
    constructor(input: ChangeServerLifeCycleStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ChangeServerLifeCycleStateCommandInput, ChangeServerLifeCycleStateCommandOutput>;
    private serialize;
    private deserialize;
}
