"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPackageVersionReadmeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *          Gets the readme file or descriptive text for a package version. For packages that do not contain a readme file, CodeArtifact
 *          extracts a description from a metadata file. For example, from the <code><description></code> element in the
 *         <code>pom.xml</code> file of a Maven package.
 *       </p>
 *          <p>
 *        The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionReadmeCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionReadmeCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetPackageVersionReadmeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPackageVersionReadmeCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionReadmeCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetPackageVersionReadmeCommand extends smithy_client_1.Command {
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
        const clientName = "CodeartifactClient";
        const commandName = "GetPackageVersionReadmeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetPackageVersionReadmeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetPackageVersionReadmeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetPackageVersionReadmeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetPackageVersionReadmeCommand(output, context);
    }
}
exports.GetPackageVersionReadmeCommand = GetPackageVersionReadmeCommand;
//# sourceMappingURL=GetPackageVersionReadmeCommand.js.map