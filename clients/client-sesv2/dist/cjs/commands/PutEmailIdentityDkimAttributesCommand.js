"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutEmailIdentityDkimAttributesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Used to enable or disable DKIM authentication for an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityDkimAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityDkimAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutEmailIdentityDkimAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityDkimAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutEmailIdentityDkimAttributesCommand extends smithy_client_1.Command {
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
        const clientName = "SESv2Client";
        const commandName = "PutEmailIdentityDkimAttributesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutEmailIdentityDkimAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutEmailIdentityDkimAttributesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutEmailIdentityDkimAttributesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand(output, context);
    }
}
exports.PutEmailIdentityDkimAttributesCommand = PutEmailIdentityDkimAttributesCommand;
//# sourceMappingURL=PutEmailIdentityDkimAttributesCommand.js.map