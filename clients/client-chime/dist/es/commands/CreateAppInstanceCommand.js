import { __extends } from "tslib";
import { CreateAppInstanceRequest, CreateAppInstanceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAppInstanceCommand,
  serializeAws_restJson1CreateAppInstanceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account. Only SDK messaging customers use this API.
 * <code>CreateAppInstance</code> supports idempotency behavior as described in the AWS API Standard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateAppInstanceCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateAppInstanceCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateAppInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAppInstanceCommand = /** @class */ (function (_super) {
  __extends(CreateAppInstanceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAppInstanceCommand(input) {
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
  CreateAppInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateAppInstanceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAppInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAppInstanceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAppInstanceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAppInstanceCommand(input, context);
  };
  CreateAppInstanceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAppInstanceCommand(output, context);
  };
  return CreateAppInstanceCommand;
})($Command);
export { CreateAppInstanceCommand };
//# sourceMappingURL=CreateAppInstanceCommand.js.map
