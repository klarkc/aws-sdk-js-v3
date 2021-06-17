"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonalizedRankingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
 *       deemed the most likely item to be of interest to the user.</p>
 *          <note>
 *             <p>The solution backing the campaign must have been created using a recipe of type
 *         PERSONALIZED_RANKING.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const command = new GetPersonalizedRankingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPersonalizedRankingCommandInput} for command's `input` shape.
 * @see {@link GetPersonalizedRankingCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetPersonalizedRankingCommand extends smithy_client_1.Command {
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
        const clientName = "PersonalizeRuntimeClient";
        const commandName = "GetPersonalizedRankingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetPersonalizedRankingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetPersonalizedRankingResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetPersonalizedRankingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetPersonalizedRankingCommand(output, context);
    }
}
exports.GetPersonalizedRankingCommand = GetPersonalizedRankingCommand;
//# sourceMappingURL=GetPersonalizedRankingCommand.js.map