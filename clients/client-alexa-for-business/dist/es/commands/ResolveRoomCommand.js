import { __extends } from "tslib";
import { ResolveRoomRequest, ResolveRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ResolveRoomCommand,
  serializeAws_json1_1ResolveRoomCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Determines the details for the room from which a skill request was invoked. This
 *          operation is used by skill developers.</p>
 *          <p>To query ResolveRoom from an Alexa skill, the skill ID needs to be authorized. When
 *          the skill is using an AWS Lambda function, the skill is automatically authorized when you
 *          publish your skill as a private skill to your AWS account. Skills that are hosted using a
 *          custom web service must be manually authorized. To get your skill authorized, contact AWS
 *          Support with your AWS account ID that queries the ResolveRoom API and skill ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ResolveRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ResolveRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ResolveRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveRoomCommandInput} for command's `input` shape.
 * @see {@link ResolveRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResolveRoomCommand = /** @class */ (function (_super) {
  __extends(ResolveRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ResolveRoomCommand(input) {
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
  ResolveRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "ResolveRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ResolveRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResolveRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ResolveRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ResolveRoomCommand(input, context);
  };
  ResolveRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ResolveRoomCommand(output, context);
  };
  return ResolveRoomCommand;
})($Command);
export { ResolveRoomCommand };
//# sourceMappingURL=ResolveRoomCommand.js.map
