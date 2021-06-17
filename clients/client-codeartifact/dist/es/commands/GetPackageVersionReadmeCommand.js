import { __extends } from "tslib";
import { GetPackageVersionReadmeRequest, GetPackageVersionReadmeResult } from "../models/models_0";
import { deserializeAws_restJson1GetPackageVersionReadmeCommand, serializeAws_restJson1GetPackageVersionReadmeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var GetPackageVersionReadmeCommand = /** @class */ (function (_super) {
    __extends(GetPackageVersionReadmeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPackageVersionReadmeCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetPackageVersionReadmeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "GetPackageVersionReadmeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPackageVersionReadmeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPackageVersionReadmeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPackageVersionReadmeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPackageVersionReadmeCommand(input, context);
    };
    GetPackageVersionReadmeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPackageVersionReadmeCommand(output, context);
    };
    return GetPackageVersionReadmeCommand;
}($Command));
export { GetPackageVersionReadmeCommand };
//# sourceMappingURL=GetPackageVersionReadmeCommand.js.map