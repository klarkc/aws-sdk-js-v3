"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHITCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT).
 *             The new HIT is made available for Workers to find and accept on the Amazon Mechanical
 *             Turk website. </p>
 *         <p>
 *             This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p>
 *         <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.
 *         </p>
 *
 *         <p>CreateHIT also supports several ways to provide question data: by providing a value
 *             for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing
 *             a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>.
 *         </p>
 *
 *         <note>
 *             <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see
 *             <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHITCommandInput} for command's `input` shape.
 * @see {@link CreateHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateHITCommand extends smithy_client_1.Command {
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
        const clientName = "MTurkClient";
        const commandName = "CreateHITCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateHITResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateHITCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateHITCommand(output, context);
    }
}
exports.CreateHITCommand = CreateHITCommand;
//# sourceMappingURL=CreateHITCommand.js.map