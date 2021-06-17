"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSolutionVersionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of solution versions for the given solution. When a solution is not
 *       specified, all the solution versions associated with the account are listed. The response
 *       provides the properties for each solution version, including the Amazon Resource Name (ARN).
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListSolutionVersionsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListSolutionVersionsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListSolutionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSolutionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSolutionVersionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListSolutionVersionsCommand extends smithy_client_1.Command {
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
        const clientName = "PersonalizeClient";
        const commandName = "ListSolutionVersionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListSolutionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListSolutionVersionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListSolutionVersionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListSolutionVersionsCommand(output, context);
    }
}
exports.ListSolutionVersionsCommand = ListSolutionVersionsCommand;
//# sourceMappingURL=ListSolutionVersionsCommand.js.map