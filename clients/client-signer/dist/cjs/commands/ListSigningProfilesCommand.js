"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSigningProfilesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all available signing profiles in your AWS account. Returns only profiles with
 * 			an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is
 * 			set to <code>true</code>. If additional jobs remain to be listed, code signing returns a
 * 				<code>nextToken</code> value. Use this value in subsequent calls to
 * 				<code>ListSigningJobs</code> to fetch the remaining values. You can continue calling
 * 				<code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with
 * 			new values that code signing returns in the <code>nextToken</code> parameter until all of your
 * 			signing jobs have been returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningProfilesCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningProfilesCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSigningProfilesCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListSigningProfilesCommand extends smithy_client_1.Command {
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
        const clientName = "SignerClient";
        const commandName = "ListSigningProfilesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListSigningProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListSigningProfilesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListSigningProfilesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListSigningProfilesCommand(output, context);
    }
}
exports.ListSigningProfilesCommand = ListSigningProfilesCommand;
//# sourceMappingURL=ListSigningProfilesCommand.js.map