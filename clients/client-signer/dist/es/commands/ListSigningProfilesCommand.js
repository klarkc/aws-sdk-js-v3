import { __extends } from "tslib";
import { ListSigningProfilesRequest, ListSigningProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSigningProfilesCommand, serializeAws_restJson1ListSigningProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListSigningProfilesCommand = /** @class */ (function (_super) {
    __extends(ListSigningProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSigningProfilesCommand(input) {
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
    ListSigningProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "ListSigningProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSigningProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSigningProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSigningProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSigningProfilesCommand(input, context);
    };
    ListSigningProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSigningProfilesCommand(output, context);
    };
    return ListSigningProfilesCommand;
}($Command));
export { ListSigningProfilesCommand };
//# sourceMappingURL=ListSigningProfilesCommand.js.map