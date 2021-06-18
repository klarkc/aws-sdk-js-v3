import { __extends } from "tslib";
import { CreateStreamingURLRequest, CreateStreamingURLResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateStreamingURLCommand,
  serializeAws_json1_1CreateStreamingURLCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateStreamingURLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingURLCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStreamingURLCommand = /** @class */ (function (_super) {
  __extends(CreateStreamingURLCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateStreamingURLCommand(input) {
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
  CreateStreamingURLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "CreateStreamingURLCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateStreamingURLRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingURLResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateStreamingURLCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateStreamingURLCommand(input, context);
  };
  CreateStreamingURLCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateStreamingURLCommand(output, context);
  };
  return CreateStreamingURLCommand;
})($Command);
export { CreateStreamingURLCommand };
//# sourceMappingURL=CreateStreamingURLCommand.js.map
