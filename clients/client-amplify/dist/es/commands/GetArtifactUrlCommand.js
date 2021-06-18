import { __extends } from "tslib";
import { GetArtifactUrlRequest, GetArtifactUrlResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetArtifactUrlCommand,
  serializeAws_restJson1GetArtifactUrlCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns the artifact info that corresponds to an artifact id. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetArtifactUrlCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetArtifactUrlCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GetArtifactUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetArtifactUrlCommandInput} for command's `input` shape.
 * @see {@link GetArtifactUrlCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetArtifactUrlCommand = /** @class */ (function (_super) {
  __extends(GetArtifactUrlCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetArtifactUrlCommand(input) {
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
  GetArtifactUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "GetArtifactUrlCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetArtifactUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetArtifactUrlResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetArtifactUrlCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetArtifactUrlCommand(input, context);
  };
  GetArtifactUrlCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetArtifactUrlCommand(output, context);
  };
  return GetArtifactUrlCommand;
})($Command);
export { GetArtifactUrlCommand };
//# sourceMappingURL=GetArtifactUrlCommand.js.map
