"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupMembershipCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds an Amazon QuickSight user to an Amazon QuickSight group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateGroupMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateGroupMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateGroupMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateGroupMembershipCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "QuickSightClient";
        const commandName = "CreateGroupMembershipCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateGroupMembershipRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateGroupMembershipResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateGroupMembershipCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateGroupMembershipCommand(output, context);
    }
}
exports.CreateGroupMembershipCommand = CreateGroupMembershipCommand;
//# sourceMappingURL=CreateGroupMembershipCommand.js.map