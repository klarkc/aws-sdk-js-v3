"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTeamMembersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all team members associated with a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListTeamMembersCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListTeamMembersCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new ListTeamMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTeamMembersCommandInput} for command's `input` shape.
 * @see {@link ListTeamMembersCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListTeamMembersCommand extends smithy_client_1.Command {
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
        const clientName = "CodeStarClient";
        const commandName = "ListTeamMembersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListTeamMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListTeamMembersResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListTeamMembersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListTeamMembersCommand(output, context);
    }
}
exports.ListTeamMembersCommand = ListTeamMembersCommand;
//# sourceMappingURL=ListTeamMembersCommand.js.map